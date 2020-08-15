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
        "arpeggios": {
            "major": ["c", "e", "g"],
            "minor": ["c", "eb", "g"],
            "aug": ["c", "e", "ab"],
            "dim": ["c", "eb", "gb"],
            "sixth": ["c", "e", "g", "a"],
            "seventh": ["c", "e", "g", "bb"],
            "majseven": ["c", "e", "g", "b"],
            "minseven": ["c", "eb", "g", "bb"],
            "sustwo": ["c", "d", "g"],
            "susfour": ["c", "f", "g"]
        }
    },
    db: {
        "root": "db",
        "scales": {
            "major": [ "db", "eb", "f", "gb", "ab", "bb", "c" ],
            "minor": [ "db", "eb", "e", "gb", "ab", "a", "b" ],
            "hminor": [ "db", "eb", "e", "gb", "ab", "a", "c" ],
            "mminor": [ "db", "eb", "e", "gb", "ab", "bb", "c" ],
            "blues": ["db", "e", "gb", "g", "ab", "b"],
            "pmajor": ["db", "eb", "f", "ab", "bb"],
            "pminor": ["db", "e", "gb", "ab", "b"]
        },
        "arpeggios": {
            "major": ["db", "f", "ab"],
            "minor": ["db", "e", "ab"],
            "aug": ["db", "f", "a"],
            "dim": ["db", "e", "g"],
            "sixth": ["db", "f", "ab", "bb"],
            "seventh": ["db", "f", "ab", "b"],
            "majseven": ["db", "f", "ab", "c"],
            "minseven": ["db", "e", "ab", "b"],
            "sustwo": ["db", "eb", "ab"],
            "susfour": ["db", "gb", "ab"]
        }
    },
    d: {
        "root": "d",
        "scales": {
            "major": [ "d", "e", "gb", "g", "a", "b", "db" ],
            "minor": [ "d", "e", "f", "g", "a", "bb", "c" ],
            "hminor": [ "d", "e", "f", "g", "a", "bb", "db" ],
            "mminor": [ "d", "e", "f", "g", "a", "b", "db" ],
            "blues": ["d", "f", "g", "ab", "a", "c"],
            "pmajor": ["d", "e", "gb", "a", "b"],
            "pminor": ["d", "f", "g", "a", "c"]
        },
        "arpeggios": {
            "major": ["d", "gb", "a"],
            "minor": ["d", "f", "a"],
            "aug": ["d", "gb", "bb"],
            "dim": ["d", "f", "ab"],
            "sixth": ["d", "gb", "a", "b"],
            "seventh": ["d", "gb", "a", "c"],
            "majseven": ["d", "gb", "a", "db"],
            "minseven": ["d", "f", "a", "c"],
            "sustwo": ["d", "e", "a"],
            "susfour": ["d", "g", "a"]
        }
    },
    eb: {
        "root": "eb",
        "scales": {
            "major": [ "eb", "f", "g", "ab", "bb", "c", "d" ],
            "minor": [ "eb", "f", "gb", "ab", "bb", "b", "db" ],
            "hminor": [ "eb", "f", "gb", "ab", "bb", "b", "d" ],
            "mminor": [ "eb", "f", "gb", "ab", "bb", "c", "d" ],
            "blues": [ "eb", "gb", "ab", "a", "bb", "db" ],
            "pmajor": ["eb", "f", "g", "bb", "c"],
            "pminor": ["eb", "gb", "ab", "bb", "db"]
        },
        "arpeggios": {
            "major": ["eb", "g", "bb"],
            "minor": ["eb", "gb", "bb"],
            "aug": ["eb", "g", "b"],
            "dim": ["eb", "gb", "a"],
            "sixth": ["eb", "g", "bb", "c"],
            "seventh": ["eb", "g", "bb", "db"],
            "majseven": ["eb", "g", "bb", "d"],
            "minseven": ["eb", "gb", "bb", "db"],
            "sustwo": ["eb", "f", "bb"],
            "susfour": ["eb", "ab", "bb"]
        }
    },
    e: {
        "root": "e",
        "scales": {
            "major": [ "e", "gb", "ab", "a", "b", "db", "eb" ],
            "minor": [ "e", "gb", "g", "a", "b", "c", "d" ],
            "hminor": [ "e", "gb", "g", "a", "b", "c", "eb" ],
            "mminor": [ "e", "gb", "g", "a", "b", "db", "eb" ],
            "blues": ["e", "g", "a", "bb", "b", "d"],
            "pmajor": ["e", "gb", "ab", "b", "db"],
            "pminor": ["e", "g", "a", "b", "d"]
        },
        "arpeggios": {
            "major": ["e", "ab", "b"],
            "minor": ["e", "g", "b"],
            "aug": ["e", "ab", "c"],
            "dim": ["e", "g", "bb"],
            "sixth": ["e", "ab", "b", "db"],
            "seventh": ["e", "ab", "b", "d"],
            "majseven": ["e", "ab", "b", "eb"],
            "minseven": ["e", "g", "b", "d"],
            "sustwo": ["e", "gb", "b"],
            "susfour": ["e", "a", "b"]
        }
    },
    f: {
        "root": "f",
        "scales": {
            "major": [ "f", "g", "a", "bb", "c", "d", "e" ],
            "minor": [ "f", "g", "ab", "bb", "c", "db", "eb" ],
            "hminor": [ "f", "g", "ab", "bb", "c", "db", "e" ],
            "mminor": [ "f", "g", "ab", "bb", "c", "db", "e" ],
            "blues": ["f", "ab", "bb", "b", "c", "eb"],
            "pmajor": ["f", "g", "a", "c", "d"],
            "pminor": ["f", "ab", "bb", "c", "eb"]
        },
        "arpeggios": {
            "major": ["f", "a", "c"],
            "minor": ["f", "ab", "c"],
            "aug": ["f", "a", "db"],
            "dim": ["f", "ab", "b"],
            "sixth": ["f", "a", "c", "d"],
            "seventh": ["f", "a", "c", "eb"],
            "majseven": ["f", "a", "c", "e"],
            "minseven": ["f", "ab", "c", "eb"],
            "sustwo": ["f", "g", "c"],
            "susfour": ["f", "bb", "c"]
        }
    },
    gb: {
        "root": "gb",
        "scales": {
            "major": [ "gb", "ab", "bb", "b", "db", "eb", "f" ],
            "minor": [ "gb", "ab", "a", "b", "db", "d", "e" ],
            "hminor": [ "gb", "ab", "a", "b", "db", "d", "f" ],
            "mminor": [ "gb", "ab", "a", "b", "db", "eb", "f" ],
            "blues": ["gb", "a", "b", "c", "db", "e"],
            "pmajor": ["gb", "ab", "bb", "db", "eb"],
            "pminor": ["gb", "a", "b", "db", "e"]
        },
        "arpeggios": {
            "major": ["gb", "bb", "db"],
            "minor": ["gb", "a", "db"],
            "aug": ["gb", "bb", "d"],
            "dim": ["gb", "a", "c"],
            "sixth": ["gb", "bb", "db", "eb"],
            "seventh": ["gb", "bb", "db", "e"],
            "majseven": ["gb", "bb", "db", "f"],
            "minseven": ["gb", "a", "db", "e"],
            "sustwo": ["gb", "ab", "db"],
            "susfour": ["gb", "b", "db"]
        }
    },
    g: {
        "root": "g",
        "scales": {
            "major": [ "g", "a", "b", "c", "d", "e", "gb" ],
            "minor": [ "g", "a", "bb", "c", "d", "eb", "f" ],
            "hminor": [  "g", "a", "bb", "c", "d", "eb", "gb" ],
            "mminor": [ "g", "a", "bb", "c", "d", "e", "gb" ],
            "blues": ["g", "bb", "c", "db", "d", "f"],
            "pmajor": ["g", "a", "b", "d", "e"],
            "pminor": ["g", "bb", "c", "d", "f"]
        },
        "arpeggios": {
            "major": ["g", "b", "d"],
            "minor": ["g", "bb", "d"],
            "aug": ["g", "b", "eb"],
            "dim": ["g", "bb", "db"],
            "sixth": ["g", "b", "d", "e"],
            "seventh": ["g", "b", "d", "f"],
            "majseven": ["g", "b", "d", "gb"],
            "minseven": ["g", "bb", "d", "f"],
            "sustwo": ["g", "a", "d"],
            "susfour": ["g", "c", "d"]
        }
    },
    ab: {
        "root": "ab",
        "scales": {
            "major": [ "ab", "bb", "c", "db", "eb", "f", "g" ],
            "minor": [ "ab", "bb", "b", "db", "eb", "e", "gb" ],
            "hminor": [ "ab", "bb", "b", "db", "eb", "e", "g" ],
            "mminor": [ "ab", "bb", "b", "db", "eb", "f", "g" ],
            "blues": ["ab", "b", "db", "d", "eb", "gb"],
            "pmajor": ["ab", "bb", "c", "eb", "f"],
            "pminor": ["ab", "b", "db", "eb", "gb"]
        },
        "arpeggios": {
            "major": ["ab", "c", "eb"],
            "minor": ["ab", "b", "eb"],
            "aug": ["ab", "c", "e"],
            "dim": ["ab", "b", "d"],
            "sixth": ["ab", "c", "eb", "f"],
            "seventh": ["ab", "c", "eb", "gb"],
            "majseven": ["ab", "c", "eb", "g"],
            "minseven": ["ab", "b", "eb", "gb"],
            "sustwo": ["ab", "bb", "eb"],
            "susfour": ["ab", "db", "eb"]
        }
    },
    a: {
        "root": "a",
        "scales": {
            "major": [ "a", "b", "db", "d", "e", "gb", "ab" ],
            "minor": [ "a", "b", "c", "d", "e", "f", "g" ],
            "hminor": [ "a", "b", "c", "d", "e", "f", "ab" ],
            "mminor": [ "a", "b", "c", "d", "e", "gb", "ab" ],
            "blues": ["a", "c", "d", "eb", "e", "g"],
            "pmajor": ["a", "b", "db", "e", "gb"],
            "pminor": ["a", "c", "d", "e", "g"]
        },
        "arpeggios": {
            "major": ["a", "db", "e"],
            "minor": ["a", "c", "e"],
            "aug": ["a", "db", "f"],
            "dim": ["a", "c", "eb"],
            "sixth": ["a", "db", "e", "gb"],
            "seventh": ["a", "db", "e", "g"],
            "majseven": ["a", "db", "e", "ab"],
            "minseven": ["a", "c", "e", "g"],
            "sustwo": ["a", "b", "e"],
            "susfour": ["a", "d", "e"]
        }
    },
    bb: {
        "root": "bb",
        "scales": {
            "major": [ "bb", "c", "d", "eb", "f", "g", "a" ],
            "minor": [ "bb", "c", "db", "eb", "f", "gb", "ab" ],
            "hminor": [ "bb", "c", "db", "eb", "f", "gb", "a" ],
            "mminor": [ "bb", "c", "db", "eb", "f", "g", "a" ],
            "blues": ["bb", "db", "eb", "e", "f", "ab"],
            "pmajor": ["bb", "c", "d", "f", "g"],
            "pminor": ["bb", "db", "eb", "f", "ab"]
        },
        "arpeggios": {
            "major": ["bb", "d", "f"],
            "minor": ["bb", "db", "f"],
            "aug": ["bb", "d", "gb"],
            "dim": ["bb", "db", "e"],
            "sixth": ["bb", "d", "f", "g"],
            "seventh": ["bb", "d", "f", "ab"],
            "majseven": ["bb", "d", "f", "a"],
            "minseven": ["bb", "db", "f", "ab"],
            "sustwo": ["bb", "c", "f"],
            "susfour": ["bb", "eb", "f"]
        }
    },
    b: {
        "root": "b",
        "scales": {
            "major": [ "b", "db", "eb", "e", "gb", "ab", "bb" ],
            "minor": [ "b", "db", "d", "e", "gb", "g", "a" ],
            "hminor": [ "b", "db", "d", "e", "gb", "g", "bb" ],
            "mminor": [ "b", "db", "d", "e", "gb", "ab", "bb" ],
            "blues": ["b", "d", "e", "f", "gb", "a"],
            "pmajor": ["b", "db", "eb", "gb", "ab"],
            "pminor": ["b", "d", "e", "gb", "a"]
        },
        "arpeggios": {
            "major": ["b", "eb", "gb"],
            "minor": ["b", "d", "gb"],
            "aug": ["b", "eb", "g"],
            "dim": ["b", "d", "f"],
            "sixth": ["b", "eb", "gb", "ab"],
            "seventh": ["b", "eb", "gb", "a"],
            "majseven": ["b", "eb", "gb", "bb"],
            "minseven": ["b", "d", "gb", "a"],
            "sustwo": ["b", "db", "gb"],
            "susfour": ["b", "e", "gb"]
        }
    },
}
export default FilterData;