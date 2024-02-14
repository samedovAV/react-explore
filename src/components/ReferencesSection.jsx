import { ReferenceItem } from 'components/ReferenceItem'
import { referenceList } from '../data'

export function ReferencesSection() {
    return(
        <section>
            <h3>References</h3>

            <ul>
            {referenceList.map((reference) => (
                <ReferenceItem key={reference.name} {... reference} />
            ))}
            </ul>
      </section>
    )
}
