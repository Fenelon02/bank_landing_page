import { FeatureCardVariant, featureCardVariants } from "./FeatureVariants"

type FeatureCardProps = { msg: string, image: React.ReactNode, variant: FeatureCardVariant}

export default function FeatureCard({ msg, image, variant }: FeatureCardProps) {
  const styles = featureCardVariants[variant]

  return (
    <div className={styles.base}>
      <div className={styles.text}>
        {msg}
      </div>

      <div className="flex justify-center mt-auto">
        {image}
      </div>
    </div>
  )
}
