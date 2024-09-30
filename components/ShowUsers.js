import { supabase } from "@/utils/supabase/client"

export default async function ShowUsers() {
  const { data, error } = await supabase.from("users").select()
  return (
    <div>
      {data.length > 0 && (
        <>
          {data.map((user) => {
            return (
              <li key={user.id}>
                <h3>{user.user}</h3>
                <p>{user.id}</p>
              </li>
            )
          })}
        </>
      )}
    </div>
  )
}
