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
    <div className="sticky top-0 h-[100vh] w-72 bg-white border-r border-gray-100 flex flex-col overflow-y-auto">
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
        <div className="flex flex-col space-y-3">
          <div className="bg-white rounded-xl p-3 border border-gray-100 flex items-center space-x-3 cursor-pointer hover:bg-gray-50">
            <div className="w-5 h-5 text-emerald-500">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="font-medium text-sm">Upgrade to Pro</div>
              <p className="text-xs text-gray-500">Get 1 month free and unlock</p>
            </div>
          </div>

          <div className="px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer flex items-center">
            <Settings className="w-5 h-5 text-gray-400 mr-3" strokeWidth={1.5} />
            <span className="text-[15px] text-gray-500">Settings</span>
          </div>

          <div className="flex items-center justify-between px-3 py-2 bg-white rounded-xl border border-gray-100">
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=64&h=64&q=80&fit=crop" 
                alt="Profile" 
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="ml-3">
                <div className="text-sm font-medium">Shakib Ali</div>
                <div className="text-xs text-gray-500">shakibali778@gmail.com</div>
              </div>
            </div>
            <Copy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;