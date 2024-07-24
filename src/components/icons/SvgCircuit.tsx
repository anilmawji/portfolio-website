const SvgCircuit = ({ color, ...restProps }: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" {...restProps}>
    <path
      stroke="#000"
      d="m384.4 1.8 5 434"
      opacity="NaN"
    />
    <path
      stroke={color}
      strokeWidth={3}
      d="M50 100V10.914"
    />
    <path
      stroke={color}
      strokeWidth={3}
      d="M50.052 90.055 34.02 74.514"
    />
    <path
      stroke={color}
      strokeWidth={3}
      d="m34.509 75.245.165-26.415M19.343 48.564l.044-23.657"
    />
    <ellipse
      cx={49.941}
      cy={6.255}
      fill="none"
      stroke={color}
      strokeWidth={3}
      rx={4.295}
      ry={4.279}
    />
    <ellipse
      cx={34.782}
      cy={43.549}
      fill="none"
      stroke={color}
      strokeWidth={3}
      rx={4.295}
      ry={4.279}
    />
    <path
      stroke={color}
      fill="none"
      strokeWidth={3}
      d="M19.581 23.828a4.286 4.286 0 0 1-4.294-4.28 4.286 4.286 0 0 1 4.294-4.278 4.286 4.286 0 0 1 4.295 4.279 4.286 4.286 0 0 1-4.295 4.279z"
    />
    <path
      stroke={color}
      strokeWidth={3}
      d="M34.634 63.403 18.6 47.862"
    />
  </svg>
)

export default SvgCircuit;