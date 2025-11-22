// Iconos SVG para skills (Simple Icons style)
export const SKILL_ICONS: Record<string, { svg: string; color: string }> = {
  'HTML': { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" fill="#E34F26"/></svg>', color: '#E34F26' },
  'CSS': { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" fill="#1572B6"/></svg>', color: '#1572B6' },
  'JavaScript': { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="#F7DF1E"/></svg>', color: '#F7DF1E' },
  'TypeScript': { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="#3178C6"/></svg>', color: '#3178C6' },
  'React': { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.337zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" fill="#61DAFB"/></svg>', color: '#61DAFB' },
  'Next.js': { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z" fill="#000000"/></svg>', color: '#000000' },
  'Vue.js': { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" fill="#41B883"/></svg>', color: '#41B883' },
  'Astro': { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.074 16.86c-.72.616-2.157.769-3.567.769s-2.849-.153-3.569-.769c-.711-.61-1.138-1.535-1.138-2.815h-1.1c0 1.656.596 2.99 1.633 3.912.987.878 2.344 1.333 3.909 1.333 1.565 0 2.921-.455 3.907-1.333 1.037-.923 1.634-2.256 1.634-3.912h-1.098c0 1.28-.428 2.206-1.14 2.815zm-4.32-8.616c-.663 0-1.201.538-1.201 1.201s.538 1.201 1.201 1.201 1.201-.538 1.201-1.201-.538-1.201-1.201-1.201zm4.32 0c-.663 0-1.201.538-1.201 1.201s.538 1.201 1.201 1.201 1.201-.538 1.201-1.201-.538-1.201-1.201-1.201zM12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 16.493c-2.478 0-4.493-2.015-4.493-4.493S9.522 7.507 12 7.507s4.493 2.015 4.493 4.493-2.015 4.493-4.493 4.493z" fill="#FF5D01"/></svg>', color: '#FF5D01' },
  'Node.js': { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" fill="#339933"/></svg>', color: '#339933' },
  'Python': { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill="#3776AB"/></svg>', color: '#3776AB' },
  'Django': { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.097c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z" fill="#092E20"/></svg>', color: '#092E20' },
  'PostgreSQL': { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2387-.0563.0094-.1689.0376-.8473.0563-.6847.022-1.607.0464-2.7462.0838-.4123.012-.7446.0271-1.0263.0415-.0089-.1796-.0736-.7013-.0736-1.2225 0-.6108.0668-1.2624.0674-1.2694a.5272.5272 0 0 0-.0021-.1249c-.0042-.0235-.2007-.2466-.4149-.2449-.1753.0013-.3022.1605-.3022.1605l-.013.0139c-.087.0854-.2135.2748-.2135.8112 0 .5603.0674 1.1632.0898 1.4256-2.1.032-4.6503.0723-7.2588.1167-1.726.0303-3.455.0607-5.1828.0911a.5271.5271 0 0 0-.1393-.0154c-.2669 0-.4792.2013-.4792.4541 0 .2528.2123.4541.4792.4541.0303 0 .0598-.0034.0886-.0089 2.0123.0462 4.0375.0892 6.0557.1316 1.0682.0222 2.1364.0445 3.2046.0668.077.0558.1679.0892.2661.0892a.5268.5268 0 0 0 .5255-.5263c0-.0156-.0014-.0307-.0021-.0463.9025.017 1.8049.0346 2.7074.0517.6196.0117 1.2392.0228 1.8588.0339-.3906.2621-.8932.5691-1.5312.9199-.5906.3248-1.2934.6628-2.1544.9732a.527.527 0 0 0-.3295.2872c-.0058.0135-.0113.0271-.0165.0409-.1042.2543-.1945.6626-.2439 1.1868-.0535.5694-.0674 1.2581.0112 1.9967.0748.7024.2379 1.4533.4907 2.1556.255.7111.6019 1.3666 1.0426 1.9029.2213.2692.4594.503.7089.6957.2417.1869.5071.3399.7929.4573.2992.1225.6159.206.9438.2492.0612.0081.1228.0138.1847.0177a.5268.5268 0 0 0 .0305-.0013c.1907-.0078.3821-.0297.5717-.0658 1.1277-.2152 2.0164-.7098 2.6893-1.2845.6758-.5778 1.1415-1.2369 1.4319-1.8392a5.3951 5.3951 0 0 0 .5315-1.7204c.0836-.6236.0893-1.2524.0655-1.8432-.0061-.1498-.0142-.2976-.0228-.4434.6885-.1605 1.2747-.3517 1.7491-.5696.2969-.1364.557-.2838.7762-.4411.2193-.1573.3989-.3247.5303-.5134.1293-.1861.2064-.3956.2298-.6264.0234-.2308-.0036-.4813-.0895-.7465a1.7597 1.7597 0 0 0-.0331-.0838zM8.3989 14.9156c-1.8284.0303-3.6569.0607-5.4853.0911a.5271.5271 0 0 0-.1562 0 .5271.5271 0 0 0-.1562-.0911l1.8985-.0303c1.2628-.0202 2.5257-.0405 3.7885-.0607.863-.0138 1.726-.0276 2.5889-.0415.0021.0332.0034.0665.0062.0993-1.0224.017-2.0439.0346-3.0645.0523-.863.0148-1.726.0303-2.5889.0455.0056.0019.0113.0034.017.0056 1.8284-.0303 3.6569-.0607 5.4854-.0911-.0041.0332-.0075.0665-.0106.0993-.0166.0004-.0332.0004-.0497.0009-1.0224.017-2.0439.0346-3.0645.0523-.863.0148-1.726.0303-2.5889.0455.0021.0019.0042.0034.0062.0056 1.8284-.0303 3.6569-.0607 5.4854-.0911l-.0169.0993c-1.0224.017-2.0439.0346-3.0645.0523-.863.0148-1.726.0303-2.5889.0455.0021.0019.0042.0034.0062.0056 1.8284-.0303 3.6569-.0607 5.4854-.0911l-.0169.0993c-1.0224.017-2.0439.0346-3.0645.0523-.863.0148-1.726.0303-2.5889.0455.0021.0019.0042.0034.0062.0056 1.8284-.0303 3.6569-.0607 5.4854-.0911l-.0169.0993c-.837.0142-1.674.0284-2.5111.0428a.5271.5271 0 0 0 .0021-.0649c0-.0332.0014-.0665.0034-.0993.6847-.012 1.3694-.0235 2.0541-.0351l1.0645-.0176c.0669.2809.1529.5574.26.8278.1071.2704.2363.5347.3875.7896-.3072.0046-.6144.0091-.9216.0137-1.0224.017-2.0439.0346-3.0645.0523-.863.0148-1.726.0303-2.5889.0455.0021.0019.0042.0034.0062.0056 1.8284-.0303 3.6569-.0607 5.4854-.0911l-.0169.0993c-1.0224.017-2.0439.0346-3.0645.0523-.863.0148-1.726.0303-2.5889.0455.0021.0019.0042.0034.0062.0056 1.8284-.0303 3.6569-.0607 5.4854-.0911l-.0169.0993c-.837.0142-1.674.0284-2.5111.0428a.5271.5271 0 0 0 .0021-.0649c0-.0332.0014-.0665.0034-.0993.6847-.012 1.3694-.0235 2.0541-.0351l1.0645-.0176c.0669.2809.1529.5574.26.8278.1071.2704.2363.5347.3875.7896-.3072.0046-.6144.0091-.9216.0137-1.0224.017-2.0439.0346-3.0645.0523-.863.0148-1.726.0303-2.5889.0455.0021.0019.0042.0034.0062.0056 1.8284-.0303 3.6569-.0607 5.4854-.0911l-.0169.0993c-1.0224.017-2.0439.0346-3.0645.0523-.863.0148-1.726.0303-2.5889.0455.0021.0019.0042.0034.0062.0056 1.8284-.0303 3.6569-.0607 5.4854-.0911-.0034.0332-.0062.0665-.0089.0993-.0166.0004-.0332.0004-.0497.0009z" fill="#4169E1"/></svg>', color: '#4169E1' },
  'Git': { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" fill="#F05033"/></svg>', color: '#F05033' },
  'Docker': { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.072-1.266-4.482-6.917-4.287-7.186-4.271l-.04.003-.01.01c-3.087 0-5.613 2.1-6.523 5.46H4.92c-1.122 0-1.93.668-2.016.758l-.022.022-.011.024a.423.423 0 00-.018.06l-.01.047c-.013.057-.017.125-.01.207.03.394.224 1.27.834 2.233.572.903 1.36 1.579 2.342 2.005.972.422 1.993.64 3.035.64 1.178 0 2.369-.26 3.543-.77 1.254-.543 2.35-1.302 3.259-2.254.974 1.214 2.134 2.088 3.448 2.6a8.89 8.89 0 002.543.373c.927 0 1.65-.195 2.145-.578.464-.36.724-.86.774-1.486.019-.248-.014-.51-.099-.784l-.006-.018z" fill="#2496ED"/></svg>', color: '#2496ED' },
  'MongoDB': { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" fill="#47A248"/></svg>', color: '#47A248' },
  'WordPress': { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.607-3.582.607M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0" fill="#21759B"/></svg>', color: '#21759B' },
  'Tailwind CSS': { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" fill="#06B6D4"/></svg>', color: '#06B6D4' },
  'Angular': { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.242L23.32 3.984 11.999.001zm7.064 18.31h-2.638l-1.422-3.503H8.996l-1.422 3.504h-2.64L12 2.65z" fill="#DD0031"/></svg>', color: '#DD0031' },
  'HTML5': { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" fill="#E34F26"/></svg>', color: '#E34F26' },
  'CSS3': { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" fill="#1572B6"/></svg>', color: '#1572B6' },
};

export const FALLBACK_ICONS: Record<string, string> = {
  'REST API': '🔗', 'REST APIs': '🔗', 'SEO': '🔍', 'SEO Audits': '🧪',
  'Yii Framework': '🎴', 'Zoho CRM': '📇', 'AWS': '☁️', 'Claude AI': '🤖',
  'Loveable AI': '💖', 'Monday': '📋', 'HTML/CSS': '🎨', 'Google Trends': '📈',
  'Asistentes IA Personalizados': '🛠️', 'Grok': '🤖', 'Beaver Builder': '🦫',
  'Bootstrap': '🅱️', 'Shopify': '🛒', 'Express': '⚡', 'Flask': '🔶',
  'Ruby on Rails': '💎', 'Ruby': '💎', 'PHP': '🐘', 'MySQL': '🐬',
  'ChatGPT': '🤖', 'GitHub Copilot': '🤖', 'GitHub': '🐱', 'Google Gemini': '✨',
  'Jira': '📋', 'Trello': '📋', 'Postman': '📮', 'SEMrush': '📊',
  'Wix': '🌐', 'Google Analytics': '📊', 'Google Search Console': '🔍',
  'PageSpeed Insights': '⚡', 'Vercel': '▲', 'Render': '🚀',
  'Railway': '🚂', 'Heroku': '🟣', 'Redis': '🔴', 'Celery': '🌱',
  'JWT': '🔐', 'WooCommerce': '🛍️', 'Nuxt.js': '💚', 'GitHub Actions': '⚙️',
  'SEO On-Page': '🔍', 'PageSpeed': '⚡',
  'Automation': '🤖', 'Webhooks': '🔗', 'Google Drive': '📁',
  'E-Commerce': '🛒', 'SaaS': '☁️', 'Analytics': '📊',
  'Solid': '🔷', 'Vanilla': '⚡',
};

export function getSkillIcon(name: string): string {
  const icon = SKILL_ICONS[name] || SKILL_ICONS[name?.replace('APIs', 'API')] || SKILL_ICONS[name?.replace('.js', '')];
  if (icon) {
    return `<span class="skill-icon" style="color:${icon.color};width:14px;height:14px;display:inline-block;flex-shrink:0" title="${name}">${icon.svg}</span>`;
  }
  const emoji = FALLBACK_ICONS[name];
  return emoji ? `<span aria-hidden="true" style="font-size:12px">${emoji}</span>` : '';
}

// Datos del CV - copiados desde shared/data/cv-data.json
export const cvData = {
  personal: {
    name: "Eduardo Valenzuela Milla",
    title: "FullStack Developer | Plataformas E-Commerce",
    email: "valenzuela.edo@gmail.com",
    phone: "+56929646969",
    location: "Temuco, Araucanía, Chile",
    photo: "/shared/assets/images/profile.jpg",
    tagline: "Desarrollador Full Stack apasionado por la construcción de soluciones digitales",
    social: {
      github: "eduvalex",
      linkedin: "eduardo-valenzuela-milla",
      twitter: "",
      portfolio: "https://eduvalex.github.io"
    }
  },

  about: {
    es: "Mi camino en tecnología comenzó en la Universidad de La Frontera (UFRO) en Temuco, Chile, donde descubrí mi pasión por transformar ideas en soluciones digitales. Durante mi formación, realicé prácticas profesionales que marcaron mi carrera: primero en Anaconda Web, donde me sumergí en el desarrollo PHP con Yii Framework, y luego en EnLaNubeLab, donde construí una aplicación web completa con Ruby on Rails para catalogar hierbas medicinales.\n\nComo freelance, expandí mi stack desarrollando una aplicación de gestión para abogados con Python y Django. Sin embargo, en 2018 decidí explorar otra de mis pasiones: fundé Escuela Nómade Yoga, donde combino mi rol como instructor de yoga certificado con el emprendimiento. La escuela sigue activa hasta hoy.\n\nEn 2022 retomé la tecnología con fuerza, co-fundando Valex Marketing, una agencia especializada en desarrollo WordPress y SEO. Gestionamos proyectos para clientes corporativos, e-commerce y startups, entregando soluciones web completas con mantenimiento continuo.\n\nParalelamente, trabajé de forma remota para Grant Solutions en España, desarrollando y manteniendo sitios WordPress empresariales con integraciones avanzadas. Mis habilidades se consolidaron a través de pruebas técnicas complejas: creé un plugin WordPress profesional con React y Google Drive API, un sistema de sorteos Full Stack con Django y Nuxt.js, y actualmente desarrollo un SaaS multi-tenant para restaurantes.\n\nHoy combino lo mejor de ambos mundos: ayudo a empresas a crecer digitalmente mientras mantengo mi conexión con el bienestar a través del yoga. Mi enfoque siempre es el mismo: código limpio, soluciones escalables y compromiso real con cada proyecto.",
    en: "My journey in technology began at Universidad de La Frontera (UFRO) in Temuco, Chile, where I discovered my passion for turning ideas into digital solutions. During my studies, I completed professional internships that shaped my career: first at Anaconda Web, diving into PHP development with Yii Framework, and then at EnLaNubeLab, where I built a complete web application with Ruby on Rails for cataloging medicinal herbs.\n\nAs a freelancer, I expanded my stack by developing a management application for lawyers using Python and Django. However, in 2018 I decided to explore another passion: I founded Escuela Nómade Yoga, where I combine my role as a certified yoga instructor with entrepreneurship. The school remains active today.\n\nIn 2022 I returned to technology full force, co-founding Valex Marketing, an agency specialized in WordPress development and SEO. We manage projects for corporate clients, e-commerce, and startups, delivering complete web solutions with ongoing maintenance.\n\nSimultaneously, I worked remotely for Grant Solutions in Spain, developing and maintaining enterprise WordPress sites with advanced integrations. My skills were consolidated through complex technical challenges: I created a professional WordPress plugin with React and Google Drive API, a Full Stack raffle system with Django and Nuxt.js, and I'm currently developing a multi-tenant SaaS for restaurants.\n\nToday I combine the best of both worlds: helping businesses grow digitally while maintaining my connection to wellness through yoga. My approach remains constant: clean code, scalable solutions, and genuine commitment to every project."
  },

  services: [
    {
      icon: '🛠️',
      titleES: 'Desarrollo Web & Apps',
      titleEN: 'Web & App Development',
      descES: 'Sitios web corporativos, e-commerce, landing pages y aplicaciones web full-stack con React, Django, Rails y WordPress. Responsive, rápidos y optimizados para conversión.',
      descEN: 'Corporate websites, e-commerce, landing pages and full-stack web applications with React, Django, Rails and WordPress. Responsive, fast and conversion-optimized.',
      tags: ['React', 'WordPress', 'Django', 'E-Commerce', 'SaaS']
    },
    {
      icon: '🔍',
      titleES: 'Auditorías SEO',
      titleEN: 'SEO Audits',
      descES: 'Análisis técnico completo de SEO on-page, velocidad de carga, estructura del sitio, Core Web Vitals y estrategia de keywords con reportes detallados y plan de acción.',
      descEN: 'Complete technical SEO on-page analysis, page speed, site structure, Core Web Vitals and keyword strategy with detailed reports and action plan.',
      tags: ['SEO On-Page', 'PageSpeed', 'Analytics', 'SEMrush']
    },
    {
      icon: '🤖',
      titleES: 'Asistentes IA Personalizados',
      titleEN: 'Custom AI Assistants',
      descES: 'Diseño e integración de chatbots inteligentes con ChatGPT, Claude AI y modelos custom para automatización, atención al cliente 24/7 y workflows empresariales.',
      descEN: 'Design and integration of intelligent chatbots with ChatGPT, Claude AI and custom models for automation, 24/7 customer service and business workflows.',
      tags: ['ChatGPT', 'Claude AI', 'Automation', 'Webhooks']
    },
    {
      icon: '🔌',
      titleES: 'Integraciones & Plugins',
      titleEN: 'Integrations & Plugins',
      descES: 'Desarrollo de plugins WordPress personalizados, conexiones con APIs externas (Google, Instagram, Drive), pasarelas de pago y automatizaciones con webhooks.',
      descEN: 'Custom WordPress plugin development, external API connections (Google, Instagram, Drive), payment gateways and webhook automations.',
      tags: ['WordPress Plugins', 'APIs', 'Google Drive', 'Webhooks']
    }
  ],

  experience: [
    {
      company: "Valex Marketing",
      position: "Co-Fundador & Desarrollador Web Full Stack",
      period: "Abr 2022 - Actualidad",
      location: "Temuco, Chile (Híbrido)",
      description: "Co-fundé agencia de marketing digital especializada en desarrollo web, SEO y estrategias digitales. Desarrollo completo de sitios WordPress para clientes corporativos, e-commerce, y startups.",
      technologies: ["WordPress", "WooCommerce", "React", "SEO", "PHP", "MySQL"]
    },
    {
      company: "Grant Solutions",
      position: "Desarrollo Web",
      period: "Feb 2025 - Jul 2025",
      location: "España (Remoto)",
      description: "Desarrollé y mantuve múltiples sitios web para clientes utilizando WordPress, integrando Zoho CRM.",
      technologies: ["WordPress", "Zoho CRM", "SEO", "PHP"]
    },
    {
      company: "Escuela Nómade Yoga",
      position: "Fundador & Instructor Certificado",
      period: "Jun 2018 - Actualidad",
      location: "Temuco, Chile",
      description: "Fundé escuela de yoga especializada en formación de profesores y clases regulares. Gestiono marketing digital, plataforma web y operaciones del negocio.",
      technologies: ["WordPress", "Google Analytics", "Redes Sociales"]
    }
  ],

  projects: [
    {
      name: "Plugin WordPress con React & Google Drive",
      description: "Sistema de gestión documental con integración a Google Drive API. Permite subir, visualizar y gestionar archivos desde WordPress con interfaz React moderna.",
      technologies: ["WordPress", "React", "Google Drive API", "REST API", "PHP"],
      category: "WordPress"
    },
    {
      name: "Sistema de Sorteos Full Stack",
      description: "Plataforma completa para gestión de sorteos online con panel admin, sistema de participantes, validación de datos y generación automática de ganadores.",
      technologies: ["Django", "Nuxt.js", "PostgreSQL", "REST APIs", "Celery"],
      category: "Full Stack"
    },
    {
      name: "SaaS Multi-Tenant para Restaurantes",
      description: "Sistema de gestión integral para restaurantes con múltiples locales. Incluye gestión de menús, pedidos, inventario y reportes en tiempo real.",
      technologies: ["Django", "React", "PostgreSQL", "Redis", "Celery", "JWT"],
      category: "Full Stack",
      link: ""
    },
    {
      name: "Dadneo Capital",
      description: "Sitio corporativo para firma de inversiones con diseño premium, integraciones de contacto y optimización SEO.",
      technologies: ["WordPress", "SEO", "Google Analytics"],
      category: "WordPress",
      link: "https://dadneocapital.com"
    },
    {
      name: "CreaSmile",
      description: "E-commerce con catálogo de 300+ productos, integración con compras públicas del Estado, gestión de inventario y pasarela de pago.",
      technologies: ["WordPress", "WooCommerce", "PHP", "MySQL"],
      category: "WordPress",
      link: "https://creasmile.cl"
    }
  ],

  education: [
    {
      institution: "Fondo Talento Digital para Chile",
      degree: "Desarrollo Ruby on Rails para Emprendimientos de Tipo Start-Up",
      field: "Ingeniería Informática",
      period: "Abr 2023 - Ago 2024",
      description: "Programa intensivo de desarrollo Full Stack con Ruby on Rails."
    },
    {
      institution: "edutecno",
      degree: "Desarrollo de Aplicaciones Full Stack Python Trainee",
      field: "Desarrollo Web",
      period: "May 2023 - Oct 2023",
      description: "Curso de capacitación de 393 horas en desarrollo Full Stack con Python, Django, PostgreSQL."
    },
    {
      institution: "Universidad de La Frontera",
      degree: "Licenciatura en Ingeniería Informática",
      field: "Ingeniería Informática",
      period: "2009 - 2014",
      description: "Formación universitaria en ingeniería de software, arquitectura de sistemas y desarrollo de aplicaciones.",
      skills: ["Java", "Java Spring", "MVC", "Git", "Microservicios"]
    }
  ],

  skills: {
    "Frontend": ["React", "Next.js", "Vue", "Astro", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    "Backend": ["Node.js", "Django", "Python", "PHP", "Ruby on Rails"],
    "Database": ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    "DevOps & Tools": ["Git", "Docker", "Vercel", "Railway", "GitHub Actions"],
    "CMS & E-Commerce": ["WordPress", "WooCommerce"],
    "SEO & Marketing": ["SEO On-Page", "Google Analytics", "PageSpeed", "SEMrush"]
  }
}
