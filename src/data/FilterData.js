import React from 'react';

const FilterData = {
    c: {
        "root": "c",
        "scales": {
            "major": [ "c", "d", "e", "f", "g", "a", "b" ],
            "minor": [ "c", "d", "eb", "f", "g", "ab", "bb" ],
            "hminor": [ "c", "d", "eb", "f", "g", "ab", "b" ],
            "mminor": [ "c", "d", "eb", "f", "g", "a", "b" ],
            "blues": ["c", "eb", "f", "gb", "g", "bb"],
            "pmajor": ["c", "d", "e", "g", "a"],
            "pminor": ["c", "eb", "f", "g", "bb"]
        },
        "chords": {
            "major": ["c", "e", "g"],
            "minor": ["c", "eb", "g"],
            "aug": ["c", "e", "ab"],
            "dim": ["c", "eb", "gb"]
        }
    },
    db: {
        "root": "db",
        "major": [ "db", "eb", "f", "gb", "ab", "bb", "c" ],
        "minor": [ "db", "eb", "e", "gb", "ab", "a", "b" ],
        "hminor": [ "db", "eb", "e", "gb", "ab", "a", "c" ],
        "mminor": [ "db", "eb", "e", "gb", "ab", "bb", "c" ],
        "blues": ["db", "e", "gb", "g", "ab", "b"],
        "pmajor": ["db", "eb", "f", "ab", "bb"],
        "pminor": ["db", "e", "gb", "ab", "b"]
    },
    d: {
        "root": "d",
        "major": [ "d", "e", "gb", "g", "a", "b", "db" ],
        "minor": [ "d", "e", "f", "g", "a", "bb", "c" ],
        "hminor": [ "d", "e", "eb", "f", "g", "ab", "b" ],
        "mminor": [ "c", "d", "eb", "f", "g", "a", "b" ],
        "blues": ["c", "eb", "f", "gb", "g", "bb"],
        "pmajor": ["c", "d", "e", "g", "a"],
        "pminor": ["c", "eb", "f", "g", "bb"]
    }
}
export default FilterData;