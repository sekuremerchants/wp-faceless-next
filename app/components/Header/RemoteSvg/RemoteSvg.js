'use client';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.text());

export default function RemoteSvg({ url }) {
  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>Failed to load SVG</div>;
  if (!data) return <div>Loading...</div>;

  // Render SVG directly into the DOM
  return <div dangerouslySetInnerHTML={{ __html: data }} />;
}