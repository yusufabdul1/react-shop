
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { toast } from 'sonner';
import { User, ShoppingBag, Heart, LogOut, Edit } from 'lucide-react';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const [orders] = useState([
    {
      id: 'ORD-123456',
      date: '2025-03-28',
      status: 'Delivered',
      total: 899.99,
      items: 2
    },
    {
      id: 'ORD-123457',
      date: '2025-02-15',
      status: 'Processing',
      total: 249.99,
      items: 1
    }
  ]);

  const handleLogout = () => {
    logout();
    toast.success("Successfully logged out");
  };

  return (
    <div className="volt-container py-8">
      <h1 className="heading-xl mb-6">My Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Info Card */}
        <Card className="md:col-span-1">
          <CardHeader className="text-center border-b pb-6">
            <div className="flex justify-center mb-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg" alt={user?.name || "User"} />
                <AvatarFallback className="text-2xl">
                  {user?.name?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
            </div>
            <CardTitle>{user?.name || "John Doe"}</CardTitle>
            <p className="text-gray-500 mt-1">{user?.email || "johndoe@example.com"}</p>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/profile">
                  <User size={16} className="mr-2" />
                  Profile Details
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/orders">
                  <ShoppingBag size={16} className="mr-2" />
                  Order History
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/wishlist">
                  <Heart size={16} className="mr-2" />
                  My Wishlist
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start text-red-500 hover:text-red-600"
                onClick={handleLogout}
              >
                <LogOut size={16} className="mr-2" />
                Logout
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Area */}
        <div className="md:col-span-2 space-y-6">
          {/* Profile Details Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
              <CardTitle>Profile Details</CardTitle>
              <Button size="sm" variant="outline">
                <Edit size={16} className="mr-2" />
                Edit Profile
              </Button>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">Full Name</h3>
                  <p className="font-medium">{user?.name || "John Doe"}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">Email Address</h3>
                  <p className="font-medium">{user?.email || "johndoe@example.com"}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">Member Since</h3>
                  <p className="font-medium">March 2025</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">Status</h3>
                  <p className="font-medium">Active</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Orders Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
              <CardTitle>Recent Orders</CardTitle>
              <Link to="/orders">
                <Button size="sm" variant="outline">View All Orders</Button>
              </Link>
            </CardHeader>
            <CardContent className="pt-6">
              {orders.length > 0 ? (
                <div className="space-y-4">
                  {orders.map(order => (
                    <div key={order.id} className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{order.id}</h3>
                        <p className="text-sm text-gray-500">Date: {order.date}</p>
                        <p className="text-sm text-gray-500">{order.items} item(s)</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${order.total.toFixed(2)}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          order.status === 'Delivered' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">You haven't placed any orders yet.</p>
                  <Link to="/products">
                    <Button>Start Shopping</Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
