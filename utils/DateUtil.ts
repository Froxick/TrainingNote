export function formatDateToDMY(date: Date | string): string {
 
  const d = new Date(date);
  
  const day = d.getDate().toString().padStart(2, '0');
  const month = (d.getMonth() + 1).toString().padStart(2, '0'); 
  const year = d.getFullYear();
  

  return `${day}.${month}.${year}`;
}

export const getDateKey = (date: Date) => {
  const newDate = new Date(date)

    const y = newDate.getFullYear()
    const m = String(newDate.getMonth() +1).padStart(2,'0')
    const d = String(newDate.getDate()).padStart(2,'0')

    return `${y}-${m}-${d}`
}