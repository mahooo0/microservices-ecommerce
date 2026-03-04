"use client";

import { UserButton } from "@clerk/nextjs";
import { ShoppingBag, User } from "lucide-react";
import { useRouter } from "next/navigation";

const ProfileButton = () => {
  const router = useRouter();
  return (
    <UserButton>
      <UserButton.MenuItems>
        <UserButton.Action
          label="Особистий кабінет"
          labelIcon={<User className="w-4 h-4" />}
          onClick={() => router.push("/account")}
        />
        <UserButton.Action
          label="Мої замовлення"
          labelIcon={<ShoppingBag className="w-4 h-4" />}
          onClick={() => router.push("/orders")}
        />
      </UserButton.MenuItems>
    </UserButton>
  );
};

export default ProfileButton;
