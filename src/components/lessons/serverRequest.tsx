"use server";

async function submitForm(formData) {
    const name = formData.get("name");
    return { message: `Hello, ${name}!` };
}