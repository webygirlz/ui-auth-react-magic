
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Send, Download } from 'lucide-react';

const WalletCard = () => {
  return (
    <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-purple-100 text-sm mb-1">My Balance</p>
            <h2 className="text-3xl font-bold">$9,566.00</h2>
          </div>
          <div className="bg-white/20 rounded-lg p-2">
            <TrendingUp className="h-6 w-6" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-purple-100 text-xs">Income</p>
            <p className="text-lg font-semibold">$3,239.34</p>
          </div>
          <div>
            <p className="text-purple-100 text-xs">Expense</p>
            <p className="text-lg font-semibold">$235.22</p>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0">
            <Send className="h-4 w-4 mr-2" />
            Send Money
          </Button>
          <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/20">
            <Download className="h-4 w-4 mr-2" />
            Request
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WalletCard;
