
import { useState, useEffect } from "react";
import { supabase } from "../service/supabaseClient";
import type { D2 } from "../constants/d2";

export function useD2() {
  const [data, setData] = useState<D2[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getData = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("d2")
      .select("*");

    if (error) {
      console.error("Lỗi:", error.message);
      setError(error.message);
      setLoading(false);
      return;
    }

    setData(data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, loading, error, getData };
}
