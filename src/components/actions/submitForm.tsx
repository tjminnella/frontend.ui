"use server";

// The _ parameter is intentional and follows the Next.js Server Actions convention.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
//export async function submitForm(_, formData: FormData) {
export async function submitForm(formData: FormData) {
        const name = formData.get("name");

    if (!name || typeof name !== "string") {
        return { error: "Name is required" };
    }

    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good morning";
    } else if (hour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    return { message: `${greeting}, ${name}` };
}