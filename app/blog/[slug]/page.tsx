export default function Page({ params }: { params: any }) {
  throw new DOMException("고의발생ㅋㅋ");

  return (
    <>
      <div>blog slug {params.slug}</div>
    </>
  );
}
