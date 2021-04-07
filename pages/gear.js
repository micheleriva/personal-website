import { Box, Heading, Text, Tag } from '@chakra-ui/react';

const gear = [
  {
    label: 'Music',
    scheme: 'purple',
    name: 'LTD JR-208 PB 27" 8-string guitar',
  },
  {
    label: 'Music',
    scheme: 'purple',
    name: 'Solar A2.7 FR LN 26.5" 7-string guitar',
  },
  {
    label: 'Music',
    scheme: 'purple',
    name: 'Fender Telecaster',
  },
  {
    label: 'Music',
    scheme: 'purple',
    name: 'Cort G250',
  },
  {
    label: 'Music',
    scheme: 'purple',
    name: 'Epiphone DR-100 Ebony',
  },
  {
    label: 'Programming',
    scheme: 'blue',
    name: 'Macbook Pro 2020 16"',
  },
  {
    label: 'Programming',
    scheme: 'blue',
    name: 'Logitech Streamcam',
  },
  {
    label: 'Programming',
    scheme: 'blue',
    name: 'LG 34WL75C 34" Monitor',
  },
  {
    label: 'Programming',
    scheme: 'blue',
    name: 'Custom Linux PC (with Ryzen 7 3700x)',
  },
  {
    label: 'Watch',
    scheme: 'yellow',
    name: 'Seiko Presage Cocktail Mojito',
  },
  {
    label: 'Watch',
    scheme: 'yellow',
    name: "'40s Golden Omega (no reference number)",
  },
];

function Gear() {
  return (
    <Box>
      <Heading> Gear you may have seen in my videos </Heading>
      <Box mt={10}>
        {gear.map((g) => (
          <Text key={g.name} mb={5}>
            <Tag colorScheme={g.scheme} mr={2}>
              {g.label}
            </Tag>
            {g.name}
          </Text>
        ))}
      </Box>
    </Box>
  );
}

export default Gear;
