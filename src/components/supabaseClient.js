

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xrasnmgnewemzozrmjtj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyYXNubWduZXdlbXpvenJtanRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk1MDEzNzksImV4cCI6MjAwNTA3NzM3OX0.ExOKb39udD_YxCliRosZHvi8XdBB8Us3Ar0G4EG9Rwc'
export const supabase = createClient(supabaseUrl, supabaseKey)
// export default function supabase(){
//     createClient(supabaseUrl, supabaseKey)
// } 