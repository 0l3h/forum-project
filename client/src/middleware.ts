import { withAuth } from "next-auth/middleware";

export default withAuth(
    {
        callbacks: {
            authorized({ token }) {
                console.log("JWT token: ", token);
                if(token) return true;
                else return false;
            }
        }
    }
);

export const config = { matcher: ["/new-question"] };