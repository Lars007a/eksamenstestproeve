import { useEffect, useState } from "react";

export default function useSimpleGet(endpoint) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState(null);

  async function get(endpoint) {
    try {
      setError(null);
      setLoading(true);
      const resp = await fetch(`http://127.0.0.1:3042/${endpoint}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!resp.ok) {
        throw new Error("Skete en fejl. Prøv igen!");
      }

      const result = await resp.json();

      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    get(endpoint); //Så den køre med det samme, når siden loader.
  }, []);

  return { loading, error, data, get };
}
