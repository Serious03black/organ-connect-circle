import { useEffect, useRef, useState } from "react";
import DailyIframe from "@daily-co/daily-js";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, VideoOff, Mic, MicOff, PhoneOff } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface VideoCallProps {
  roomUrl: string;
  onLeave: () => void;
}

const VideoCall = ({ roomUrl, onLeave }: VideoCallProps) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const callFrameRef = useRef<any>(null);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (!videoRef.current) return;

    const callFrame = DailyIframe.createFrame(videoRef.current, {
      showLeaveButton: false,
      iframeStyle: {
        width: '100%',
        height: '100%',
        border: 'none',
      },
    });

    callFrameRef.current = callFrame;

    callFrame
      .join({ url: roomUrl })
      .then(() => {
        console.log("Joined video call");
      })
      .catch((error) => {
        console.error("Error joining call:", error);
        toast({
          title: "Error",
          description: "Failed to join video call",
          variant: "destructive",
        });
      });

    return () => {
      callFrame.destroy();
    };
  }, [roomUrl, toast]);

  const toggleVideo = () => {
    if (callFrameRef.current) {
      callFrameRef.current.setLocalVideo(!isVideoEnabled);
      setIsVideoEnabled(!isVideoEnabled);
    }
  };

  const toggleAudio = () => {
    if (callFrameRef.current) {
      callFrameRef.current.setLocalAudio(!isAudioEnabled);
      setIsAudioEnabled(!isAudioEnabled);
    }
  };

  const leaveCall = () => {
    if (callFrameRef.current) {
      callFrameRef.current.leave();
    }
    onLeave();
  };

  return (
    <Card className="w-full">
      <CardContent className="p-0">
        <div className="relative w-full" style={{ height: "600px" }}>
          <div ref={videoRef} className="w-full h-full" />
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <Button
              variant={isVideoEnabled ? "secondary" : "destructive"}
              size="icon"
              onClick={toggleVideo}
            >
              {isVideoEnabled ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
            </Button>
            
            <Button
              variant={isAudioEnabled ? "secondary" : "destructive"}
              size="icon"
              onClick={toggleAudio}
            >
              {isAudioEnabled ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
            </Button>
            
            <Button
              variant="destructive"
              size="icon"
              onClick={leaveCall}
            >
              <PhoneOff className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCall;
