searchState.loadedDescShard("enumflags2", 0, "Enum Flags\nA <code>BitFlags</code> with all flags set. Equivalent to <code>all()</code>, but …\nA trait automatically implemented by <code>#[bitflags]</code> to make …\nRepresents a set of flags of some type <code>T</code>. <code>T</code> must have the …\nA <code>ConstToken</code> for this type of flag.\nWorkaround for <code>const fn</code> limitations.\nAn empty <code>BitFlags</code>. Equivalent to <code>empty()</code>, but works in a …\nThe error struct used by <code>BitFlags::from_bits</code> and the …\nIterator that yields each flag set in a <code>BitFlags</code>.\nCreate a <code>BitFlags</code> with all flags set.\nCreate a <code>BitFlags</code> with all flags set.\nReturns the underlying bitwise value.\nReturns the underlying bitwise value.\nReturns true if all flags are contained.\nCreate a <code>BitFlags</code> with no flags set (in other words, with …\nCreate a <code>BitFlags</code> with no flags set (in other words, with …\nIf exactly one flag is set, the flag is returned. …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate a <code>BitFlags</code> if the raw value provided does not …\nCreate a <code>BitFlags</code> if the raw value provided does not …\nCreate a <code>BitFlags</code> from an underlying bitwise value. If any …\nCreate a <code>BitFlags</code> from an underlying bitwise value. If any …\nCreate a <code>BitFlags&lt;T&gt;</code> from an underlying bitwise value. If …\nCreate a <code>BitFlags</code> unsafely, without checking if the bits …\nCreate a new BitFlags unsafely, without checking if the …\nCreate a new BitFlags unsafely, without checking if the …\nTurn a <code>T</code> into a <code>BitFlags&lt;T&gt;</code>. Also available as <code>flag.into()</code>.\nInserts the flags into the BitFlag\nBitwise AND — return value contains flag if both …\nReturns true if at least one flag is shared.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturn the bits that didn’t correspond to any flags.\nReturns true if all flags are set\nReturns true if no flag is set\nIterate over the <code>BitFlags</code>.\nReturns the number of flags set.\n<code>make_bitflags!</code> provides a succint syntax for creating …\nBitwise NOT — return value contains flag if argument …\nRemoves the matching flags\nInserts if <code>cond</code> holds, else removes\nToggles the matching bits\nReturn the truncated result of the conversion.\nBitwise OR — return value contains flag if either …")