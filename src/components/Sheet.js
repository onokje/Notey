import React from "react";

export default function Sheet ({note}) {
    return <div className="sheet">
        <div className="sheet_line_set treble_clef">
          <span className="sheet_lines">
            <span className="sheet_notes-wrapper">
                {note.clef === 'treble' &&
                <span className={`sheet-note note-${note.name}`}/>
                }
            </span>
          </span>
        </div>

        <div className="sheet_line_set bass_clef">
            <span className="sheet_lines">
              <span className="sheet_notes-wrapper">
                {note.clef === 'bass' &&
                <span className={`sheet-note note-${note.name}`}/>
                }
              </span>
            </span>
        </div>
    </div>;
}