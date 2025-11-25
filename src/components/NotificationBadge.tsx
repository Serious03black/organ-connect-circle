import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";

export const NotificationBadge = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchCount();
    
    // Set up real-time subscription
    const channel = supabase
      .channel('notification_count')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'contact_requests'
        },
        () => {
          fetchCount();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchCount = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { count: pendingCount } = await supabase
        .from("contact_requests")
        .select("*", { count: "exact", head: true })
        .eq("recipient_id", user.id)
        .eq("status", "pending");

      setCount(pendingCount || 0);
    } catch (error) {
      console.error("Error fetching notification count:", error);
    }
  };

  if (count === 0) return null;

  return (
    <Badge variant="destructive" className="ml-2">
      {count}
    </Badge>
  );
};