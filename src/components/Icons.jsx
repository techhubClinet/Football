import {
  LayoutDashboard,
  Users,
  Contact,
  Crosshair,
  Briefcase,
  MapPin,
  Network,
  DollarSign,
  Euro,
  Clock,
  Eye,
  EyeOff,
  Settings,
  MessageCircle,
  BarChart3,
  ChartColumnIncreasing,
  ShoppingCart,
  Search,
  Bell,
  ChevronDown,
  Gem,
  Calendar,
  AlertTriangle,
  FileText,
  Target,
  TrendingUp,
  Home,
  Phone,
  UsersRound,
  Lock,
  Crown,
  Download,
  Trash2,
  Check,
  X,
  Heart,
  AtSign,
  AlertCircle,
  Trophy,
  Building2,
  Mail,
  FileSignature,
  HelpCircle,
  Share2,
  UserPlus,
  Megaphone,
  ChevronLeft,
  ChevronRight,
  ArrowLeftRight,
  Plus,
  Filter,
  Info,
  Menu,
} from 'lucide-react';

const iconSize = 18;
const iconSizeSm = 16;
const iconSizeLg = 20;

export function IconWrapper({ children, size = iconSize, className = '' }) {
  return (
    <span className={className} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      {children}
    </span>
  );
}

export const NavIcons = {
  dashboard: LayoutDashboard,
  players: Users,
  contacts: Contact,
  scouting: Crosshair,
  needs: Briefcase,
  mercato: MapPin,
  network: Network,
  finances: DollarSign,
  timesheet: Clock,
  profileViews: Eye,
  settings: Settings,
  messagerie: MessageCircle,
  reporting: ChartColumnIncreasing,
  marketplace: ShoppingCart,
};

export function NavIcon({ name, size = iconSize, className = '' }) {
  const Icon = NavIcons[name];
  if (!Icon) return null;
  return <Icon size={size} strokeWidth={2} className={className} aria-hidden />;
}

export {
  LayoutDashboard,
  Search,
  Bell,
  ChevronDown,
  Gem,
  Calendar,
  AlertTriangle,
  DollarSign,
  Users,
  Eye,
  EyeOff,
  Settings,
  FileText,
  Target,
  TrendingUp,
  Home,
  Phone,
  UsersRound,
  Lock,
  Crown,
  Download,
  Trash2,
  Check,
  X,
  Heart,
  AtSign,
  AlertCircle,
  Trophy,
  Building2,
  Mail,
  FileSignature,
  Clock,
  MapPin,
  Contact,
  Crosshair,
  Briefcase,
  Network,
  MessageCircle,
  BarChart3,
  ChartColumnIncreasing,
  ShoppingCart,
  HelpCircle,
  Share2,
  UserPlus,
  Megaphone,
  ChevronLeft,
  ChevronRight,
  ArrowLeftRight,
  Plus,
  Euro,
  Filter,
  Info,
  Menu,
};

export const iconSizeDefault = iconSize;
export const iconSizeSmall = iconSizeSm;
export const iconSizeLarge = iconSizeLg;
