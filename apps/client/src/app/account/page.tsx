import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function AccountPage() {
  const user = await currentUser();

  if (!user) return null;

  return (
    <div className="rounded-2xl bg-white p-8">
      <h1 className="mb-6 text-2xl font-semibold">Профіль</h1>
      <div className="flex items-center gap-6">
        {user.imageUrl && (
          <Image
            src={user.imageUrl}
            alt={user.fullName || "Avatar"}
            width={80}
            height={80}
            className="rounded-full"
          />
        )}
        <div className="flex flex-col gap-1">
          {user.fullName && (
            <p className="text-lg font-medium">{user.fullName}</p>
          )}
          {user.primaryEmailAddress && (
            <p className="text-grey-9">
              {user.primaryEmailAddress.emailAddress}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
