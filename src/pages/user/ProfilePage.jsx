import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) return <p>Loading...</p>;

  return (
    <div className="max-w-lg mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p>
              <strong>Role:</strong>{" "}
              <Badge variant="outline" className="capitalize">
                {user.role}
              </Badge>
            </p>
          </div>

          <div className="flex gap-2 mt-4">
            <Button onClick={() => navigate("/orders")}>My Orders</Button>
            <Button onClick={() => navigate("/cart")} variant="outline">
              My Cart
            </Button>
            <Button onClick={logout} variant="destructive">
              Logout
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
