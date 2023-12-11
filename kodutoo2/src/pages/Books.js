import React, { useState} from 'react'

function Books() {
    const [books, uuendaBooks] = useState(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "To Kill a Mockingbird", "Crime and Punishment"]);

    const tagasiNimekirja = () => {
        uuendaBooks(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "To Kill a Mockingbird", "Crime and Punishment"]);
    }

    const sorteeriAZ = () => {
        // poed.sort();
        books.sort((a, b) => a.localeCompare(b)); // a vordle b-ga
        uuendaBooks(books.slice());
    }

    const sorteeriZA = () => {
        books.sort((a, b) => b.localeCompare(a)); // b vordle a-ga
        uuendaBooks(books.slice());
    }

    const sonaPikkuseJargi = () => {
        books.sort((a, b) => a.length - b.length);
        uuendaBooks(books.slice());
    }

    const teiseTaheJargi = () => {
        books.sort((a, b) => a[1].localeCompare(b[1]));
        uuendaBooks(books.slice());
    }

    const sonadeArvuJargi = () => {
        const sortedBooks = [...books].sort((a, b) => {
          // Split titles into words and compare their lengths
          const wordsA = a.split(" ").length;
          const wordsB = b.split(" ").length;
    
          return wordsA - wordsB; // Sort by ascending order of word count
        });
        uuendaBooks(sortedBooks);
      };

      const eelviimaseTaheJargi = () => {
        const sortedBooks = [...books].sort((a, b) => {
          const secondToLastA = a.charAt(a.length - 2).toLowerCase();
          const secondToLastB = b.charAt(b.length - 2).toLowerCase();
    
          return secondToLastA.localeCompare(secondToLastB);
        });
        uuendaBooks(sortedBooks);
      };

      const algabTheGa = () => {
        const vastus = books.filter(uksBooks => uksBooks.startsWith("The"));
        uuendaBooks(vastus);
    };

    const sisaldabAnd = () => {
        const vastus = books.filter(uksBooks =>uksBooks.includes("and"));
        uuendaBooks(vastus)
    };

    const rohkemKui10Tahte = () => {
        const vastus = books.filter(uksBooks => uksBooks.length >= 10);
        uuendaBooks(vastus)
    };

    const vahemKui7Tahte = () => {
        const vastus = books.filter(uksBooks => uksBooks.length <= 7);
        uuendaBooks(vastus)
    };


    return (
        <div>
            <br/>
            {books.map(element => <div>{element}</div>)}
            <br/>
            <button onClick={tagasiNimekirja}>Tagasi nimekirja</button>
            <br/><br/>
            <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
            <button onClick={sorteeriZA}>Sorteeri Z-A</button>
            <button onClick={sonaPikkuseJargi}>Sorteeri sona pikkuse jargi</button>
            <button onClick={teiseTaheJargi}>Sorteeri teise tahe jargi</button>
            <button onClick={sonadeArvuJargi}>Sorteeri sonade arvu jargi</button>
            <button onClick={eelviimaseTaheJargi}>Sorteeri eelviimase tahe jargi</button>
            <br/><br/>
            <button onClick={algabTheGa}>Algavad "The"-ga</button>
            <button onClick={sisaldabAnd}>Sisaldab "and"</button>
            <button onClick={rohkemKui10Tahte}>Rohkem, kui 10 tahemarki</button>
            <button onClick={vahemKui7Tahte}>Vahem, kui 7 tahemarki </button>

            {/* <button onClick={""}>Kolm ja rohkem sona </button> */}
            {/* <button onClick={""}>Eelviimane taht "c"</button> */}
        </div>
    )
}

export default Books
