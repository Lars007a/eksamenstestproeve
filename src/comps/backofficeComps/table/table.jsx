import styles from "./table.module.css";
import { MdDelete } from "react-icons/md";

export default function Table({ ArrayToUse = [], deleteFunc }) {
  //ArrayToUse ville være en Array med objects med key value pairs.
  //Så får at finde ud af hvilke keys table skal vise, når den looper over arrayen,
  //Så find ud af hvilke keys der er i arrayens første index med følgende.
  const keysInArray = Object.keys(ArrayToUse[0]); //Giver en array med de keys vi skal vise i tabellen for hvert element i arrayToUse.

  return (
    <div className={styles.tableCon}>
      <table>
        <thead>
          <tr>
            {/* Loop over de keys der er i hvert object. */}
            {keysInArray.map((element, index) => {
              return <th key={index}>{element}</th>;
            })}
            <th>Fjern</th>
          </tr>
        </thead>
        <tbody>
          {ArrayToUse.map((element, index) => {
            /* loop over hele arrayen med alt data. */
            return (
              <tr key={element._id}>
                {/* Lav en row i tabellen for hvert element i hele datasættet. Med id'et i objektet som key. */}
                {keysInArray.map((e, i) => {
                  //For at få de specefikke keys vi skal bruge, loop over den array vi lavede, med de keys
                  //Der var i hvert objekt i den "store" array med alle objekter.
                  //Og bare returnere en kolonne i tabellen, med elementet fra den store array med alle objekter som vi looper over i
                  //denne iteration, og den specefikke key vi lige nu looper over og den anden indre iteration.
                  return (
                    <td key={i}>
                      <div>{element[e]}</div>{" "}
                      {/* brug for en div til at styre i CSS td elementet og hvordan det håndtere store elementer af tekst og data. */}
                    </td>
                  );
                })}

                {/* tilføj så bare lige en delete knap. */}
                <td>
                  <MdDelete
                    onClick={() => {
                      deleteFunc(element._id);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
