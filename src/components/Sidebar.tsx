import React from 'react';
import { 
  LayoutDashboard, 
  MessageSquare,
  Wallet, 
  CreditCard, 
  Shield, 
  Coins,
  BarChart3,
  LineChart,
  Activity,
  Gift,
  ScrollText,
  Settings,
  ChevronDown,
  Copy,
  Zap
} from 'lucide-react';

const MenuItem = ({ icon: Icon, text, count, active = false, hasDropdown = false }: { 
  icon: React.ElementType;
  text: string;
  count?: number | string;
  active?: boolean;
  hasDropdown?: boolean;
}) => (
  <div className={`flex items-center px-4 py-2 cursor-pointer ${active ? 'bg-emerald-50 text-emerald-600' : 'text-gray-500 hover:bg-gray-50'}`}>
    <Icon className="w-5 h-5 mr-3" strokeWidth={1.5} />
    <span className="flex-grow text-[15px]">{text}</span>
    {count && (
      <span className={`px-2 py-0.5 text-sm ${typeof count === 'number' ? 'bg-emerald-100 text-emerald-600' : 'bg-emerald-500 text-white'} rounded-full`}>
        {count}
      </span>
    )}
    {hasDropdown && <ChevronDown className="w-4 h-4 text-gray-400" />}
  </div>
);

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-screen flex flex-col">
      {/* Header */}
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center mr-3">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-medium">Finovate</h1>
            <div className="text-xs text-gray-500">Free Plan</div>
          </div>
        </div>
        <div className="w-7 h-7 flex items-center justify-center">
          <Copy className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 pt-4">
        <div className="space-y-6">
          <div>
            <div className="text-xs font-medium text-gray-400 mb-1 px-4">GENERAL</div>
            <MenuItem icon={LayoutDashboard} text="Dashboard" active />
            <MenuItem icon={MessageSquare} text="Transactions" />
            <MenuItem icon={Wallet} text="Payments" count={12} />
          </div>

          <div>
            <div className="text-xs font-medium text-gray-400 mb-1 px-4">TOOLS</div>
            <MenuItem icon={CreditCard} text="Cards" hasDropdown />
            <MenuItem icon={Shield} text="Vaults" />
            <MenuItem icon={Coins} text="Capital" />
          </div>

          <div>
            <div className="text-xs font-medium text-gray-400 mb-1 px-4">INSIGHTS</div>
            <MenuItem icon={BarChart3} text="Reports" />
            <MenuItem icon={LineChart} text="Analytics" />
            <MenuItem icon={Activity} text="Activity" />
          </div>

          <div>
            <div className="text-xs font-medium text-gray-400 mb-1 px-4">OTHER</div>
            <MenuItem icon={Gift} text="Earn" count="$30" />
            <MenuItem icon={ScrollText} text="Invoices" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto px-4 pb-4">
        <div className="bg-gray-50 rounded-xl p-3 mb-4">
          <div className="flex items-center">
            <Zap className="w-5 h-5 text-emerald-500 mr-2" />
            <span className="font-medium">Upgrade to Pro</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Get 1 month free and unlock</p>
        </div>

        <div className="flex items-center">
          <img 
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=64&h=64&q=80&fit=crop" 
            alt="Profile" 
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="ml-3 flex-grow">
            <div className="text-sm font-medium">Mncedisi Bhembe</div>
            <div className="text-xs text-gray-500">cowded268@gmail.com</div>
          </div>
          <Copy className="w-4 h-4 text-gray-400 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;