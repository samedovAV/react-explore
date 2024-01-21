export default function ReferenceItem({ link, name }) {
    return(
      <li>
        <a href={link} target="_blank">
          {name}
        </a>
      </li>
    )
  }