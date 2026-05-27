import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    const { name, email, message } = body;

    return new Response(
      JSON.stringify({
        success: true,
        message: "Mensaje enviado correctamente",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("ERROR API:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Error al enviar el formulario",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
};
