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
}
export default FilterData;