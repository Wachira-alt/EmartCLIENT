import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProfileOverview = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <p>Loading user info...</p>;

  return (
    <Card className="max-w-xl w-full">
      <CardHeader>
        <CardTitle className="text-lg">Profile Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-muted-foreground text-sm">Username</p>
          <p className="font-medium">{user.username}</p>
        </div>
        <div>
          <p className="text-muted-foreground text-sm">Email</p>
          <p className="font-medium">{user.email}</p>
        </div>
        <div>
          <p className="text-muted-foreground text-sm">Role</p>
          <Badge variant="outline" className="capitalize">
            {user.role}
          </Badge>
        </div>
        <div>
          <p className="text-muted-foreground text-sm">Joined On</p>
          <p className="font-medium">{new Date(user.created_at).toLocaleDateString()}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileOverview;
