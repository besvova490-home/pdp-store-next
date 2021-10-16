export default function formatUserName(userName: string): string {
  const [firstName, lastName] = userName.split(" ");

  return `${firstName[0]}${lastName[0]}`;
}
