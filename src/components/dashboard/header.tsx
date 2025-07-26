import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Loader, LogOut, User, Settings } from "lucide-react";
import Link from "next/link";

interface DashboardHeaderProps {
  onSimulate: () => void;
  isSimulating: boolean;
}

const KafkaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
        <path d="M4.2 10.2C2.1 9.4 2.3 6.4 4.5 5.5s4.7.5 5.5 2.5c.8 2.1-.5 4.7-2.5 5.5s-4.8-.5-5.3-2.3a3 3 0 0 1 .1-1Z"/>
        <path d="m11.1 11.2 4.8-2.4a2 2 0 0 1 2.8 2.8l-2.4 4.8c-.8 1.5-3 1.5-3.8 0Z"/>
        <path d="M14 22V10"/>
        <path d="m14.6 10.5 5.9-3.3c.5-.3.9-.7 1-1.2.2-1.2-1.5-2.2-2.5-1.5s-2.2 1.5-1.5 2.5c.3.5.7.9 1.2 1"/>
    </svg>
)

export default function DashboardHeader({ onSimulate, isSimulating }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 border-b shrink-0 bg-background/95 backdrop-blur-sm sm:px-8">
      <div className="flex items-center gap-2">
        <KeyRound className="w-6 h-6 text-primary" />
        <h1 className="text-xl font-bold font-headline">StockFlow</h1>
      </div>
      <div className="flex items-center gap-4">
        <Button onClick={onSimulate} disabled={isSimulating}>
          {isSimulating ? (
            <Loader className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <KafkaIcon />
          )}
          Simulate Events
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-9 w-9 cursor-pointer">
              <AvatarImage src="https://placehold.co/100x100.png" alt="Admin" data-ai-hint="user avatar" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link href="/" passHref>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

const KeyRound = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777z"/>
        <path d="M11 11l6 6"/>
        <path d="m17 5-2 2"/>
    </svg>
)
