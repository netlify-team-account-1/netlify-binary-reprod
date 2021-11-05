export async function handler({ body }) {
  console.log({ body })
  return {
    statusCode: 200,
    body,
  };
}
