import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
	publicRoutes: [
		"/",
		"/signin", // Add the signin route here
		"/events/:id",
		"/api/webhook/clerk",
		"/api/webhook/stripe",
		"/api/uploadthing",
	],
	ignoredRoutes: [
		"/api/webhook/clerk",
		"/api/webhook/stripe",
		"/api/uploadthing",
	],
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
