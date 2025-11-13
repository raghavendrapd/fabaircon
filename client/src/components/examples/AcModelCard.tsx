import AcModelCard from '../AcModelCard'
import splitAcImage from '@assets/generated_images/Split_AC_unit_white_69b54d10.png';

export default function AcModelCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <AcModelCard 
        name="Premium Split AC"
        brand="LG"
        type="Split AC"
        capacity="1.5 Ton"
        coverage="150-180 sq ft"
        energyRating="5 Star"
        features={[
          "Fast cooling technology",
          "Low noise operation",
          "Energy efficient",
          "Auto clean function"
        ]}
        imageUrl={splitAcImage}
      />
    </div>
  )
}
