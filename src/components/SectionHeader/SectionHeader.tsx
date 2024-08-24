import styles from "./SectionHeader.module.scss";
export function SectionHeader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={styles.root}>
      {children}
    </section>
  );
}