import { auth, signIn, signOut } from "@/auth";

export default async function Home() {
  const session = await auth();
  const user = session?.user;

  console.log(session);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>
      <p>Current user: {user ? user.name : "no user"}</p>
      <p>User ID: {user?.id}</p>
      <p>email: {user?.email}</p>
      <span className="material-symbols-outlined">face</span>
    </>
  );
}
