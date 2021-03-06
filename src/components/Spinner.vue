<template>
    <span :class="'spinner-' + spinnerType"></span>
</template>

<script>
export const SPINNER_TYPES = [
  'double-dot-in',
  'dot-in',
  'double-dot-stick',
  'dot-stick',
  'double-dot-out',
  'dot-out',

  'wave-in',
  'double-wave-in',
  'huge-wave-in',
  'wave-out',
  'double-wave-out',
  'huge-wave-out',

  'double-section-in',
  'section-in',
  'double-section',
  'section',
  'double-section-out',
  'section-out',
  'double-section-far',
  'section-far'
]

export default {
  props: {
    spinnerType: {
      type: String,
      default: 'double-section-out'
    }
  }
}
</script>

<style lang="scss">
  $inactive: #aaa;
  $active: tomato;
  $speed: 1.2s;
  $size: 50px;
  $unit: $size / 16;

  %spinner {
    display: block;
    float: left;
    width: $size;
    height: $size;
    border-radius: 50%;
    border: $unit solid $inactive;
    animation: spinner $speed linear infinite;
  }
  @keyframes spinner {
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
  }

  /* Dots */
  %spinner-double-dot-in,
  .spinner-double-dot-in {
    @extend %spinner;
    position: relative;

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: ($unit*2);
      left: ($size/2 -$unit);
      width: ($unit*2);
      height: ($unit*2);
      border-radius: 50%;
      background: $active;
    }
    &:after {
      top: auto;
      bottom: ($unit*2);
    }
  }
  %spinner-dot-in,
  .spinner-dot-in {
    @extend %spinner-double-dot-in;

    &:after {
      display: none;
    }
  }
  %spinner-double-dot-stick,
  .spinner-double-dot-stick {
    @extend %spinner-double-dot-in;

    &:before,
    &:after {
      top: (-$unit*2);
    }
    &:after {
      top: auto;
      bottom: (-$unit*2);
    }
  }
  %spinner-dot-stick,
  .spinner-dot-stick {
    @extend %spinner-double-dot-stick;

    &:after {
      display: none;
    }
  }
  %spinner-double-dot-out,
  .spinner-double-dot-out {
    @extend %spinner-double-dot-in;

    &:before,
    &:after {
      top: (-$unit*4);
    }
    &:after {
      top: auto;
      bottom: (-$unit*4);
    }
  }
  %spinner-dot-out,
  .spinner-dot-out {
    @extend %spinner-double-dot-out;

    &:after {
      display: none;
    }
  }

  /* Waves */

  %spinner-wave-out,
  .spinner-wave-out {
    @extend %spinner;
    box-shadow: (-$unit/2) (-$unit/2) 0 ($unit/2) $active;
  }
  %spinner-wave-in,
  .spinner-wave-in {
    @extend %spinner;
    box-shadow: inset (-$unit/2) (-$unit/2) 0 ($unit/2) $active;
  }
  %spinner-double-wave-out,
  .spinner-double-wave-out {
    @extend %spinner;
    box-shadow: (-$unit/2) (-$unit/2) 0 ($unit/2) $active,
                ($unit/2) ($unit/2) 0 ($unit/2) $active;
  }
  %spinner-double-wave-in,
  .spinner-double-wave-in {
    @extend %spinner;
    box-shadow: inset (-$unit/2) (-$unit/2) 0 ($unit/2) $active,
                inset ($unit/2) ($unit/2) 0 ($unit/2) $active;
  }

  %spinner-huge-wave-out,
  .spinner-huge-wave-out {
    @extend %spinner;
    box-shadow: (-$unit/2) (-$unit/2) 0 ($unit*2) $active;
  }
  %spinner-huge-wave-in,
  .spinner-huge-wave-in {
    @extend %spinner;
    box-shadow: inset (-$unit/2) (-$unit/2) 0 ($unit*2) $active;
  }

  /* Sections */
  %spinner-double-section,
  .spinner-double-section {
    @extend %spinner;
    position: relative;

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: -$unit;
      left: -$unit;
      display: block;
      width: $size;
      height: $size;
      border-radius: 50%;
      border: $unit solid transparent;
      border-top-color: $active;
    }
    &:after {
      border-top-color: transparent;
      border-bottom-color: $active;
    }
  }
  %spinner-section,
  .spinner-section {
    @extend %spinner-double-section;

    &:after {
      display: none;
    }
  }
  %spinner-double-section-in,
  .spinner-double-section-in {
    @extend %spinner-double-section;

    &:before,
    &:after {
      top: 0;
      left: 0;
      width: ($size - $unit*2);
      height: ($size - $unit*2);
    }
  }
  %spinner-section-in,
  .spinner-section-in {
    @extend %spinner-double-section-in;

    &:after {
      display: none;
    }
  }
  %spinner-double-section-out,
  .spinner-double-section-out {
    @extend %spinner-double-section;

    &:before,
    &:after {
      top: ($unit*-2);
      left: ($unit*-2);
      width: ($size + $unit*2);
      height: ($size + $unit*2);
    }
  }
  %spinner-section-out,
  .spinner-section-out {
    @extend %spinner-double-section-out;

    &:after {
      display: none;
    }
  }
  %spinner-double-section-far,
  .spinner-double-section-far {
    @extend %spinner-double-section;

    &:before,
    &:after {
      top: ($unit*-3);
      left: ($unit*-3);
      width: ($size + $unit*4);
      height: ($size + $unit*4);
    }
  }
  %spinner-section-far,
  .spinner-section-far {
    @extend %spinner-double-section-far;

    &:after {
      display: none;
    }
  }

  /* --- */
  $n: 4;
  $m: 10px;
  body { background: #303030; overflow: hidden; }
  .container { width: ($size + $m * 4) * $n; margin: 30px auto; }
  span { margin: $m; &:nth-child(#{$n}n+1) { clear: both; } }
</style>
