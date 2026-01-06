import React from "react";

export default function Footer(): React.ReactElement {
  return (
    <footer className="border-t mt-12">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm">© Copyright 2015 by <span>Garber Bros, Inc.</span>. All Rights Reserved.</div>
        <div className="text-sm footer-muted">
          <a href="/transparency-in-coverage" className="underline">Transparency in Coverage</a>
        </div>
      </div>
    </footer>
  );
}
