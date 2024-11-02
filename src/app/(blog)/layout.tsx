import styles from './layout.module.scss';
export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.root}>
      <article className='prose prose-sm prose-neutral prose-invert md:prose-lg'>
        {children}
      </article>
    </div>
  );
}
