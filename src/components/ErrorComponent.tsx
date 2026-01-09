export default function ErrorComponent({ message }: { message: string }) {
  return <div>Oups une erreur s'est produite : {message}</div>;
}
