export default function(dateObj){
  return dateObj.toISOString().slice(0, 10);
}
