// Further explanations on the scale function used on script.js
function convert_range(
  original_value,
  original_min,
  original_max,
  new_min,
  new_max
) {
  // Shift the value so that the original range starts at 0
  shifted_value = original_value - original_min;

  // Scale the value to the new range
  scale_factor = (new_max - new_min) / (original_max - original_min);
  return new_min + shifted_value * scale_factor;
}

/*

This function takes in five arguments: the original value, the minimum and maximum of the original range, and the minimum and maximum of the new range. It first shifts the original value so that the original range starts at 0, and then scales it to fit within the new range.

About the scale_factor:
This formula determines the relationship between the original range and the new range. The difference between the new maximum and minimum (new_max - new_min) represents the size of the new range, and the difference between the original maximum and minimum (original_max - original_min) represents the size of the original range.

The scale factor is then calculated by dividing the size of the new range by the size of the original range. This tells us how much larger or smaller the new range is compared to the original range.

For example, consider the following call to the convert_range function: convert_range(50, 0, 100, 0, 200)

In this case, the original range is 0 to 100 and the new range is 0 to 200. The scale factor would be calculated as follows:
scale_factor = (200 - 0) / (100 - 0) = 2

This tells us that the new range is twice as large as the original range.

The scale factor is then used to scale the shifted value (which is the original value shifted so that the original range starts at 0) to fit within the new range. For example, if the original value is 50 and the scale factor is 2, the scaled value would be 100, which falls within the new range of 0 to 200.

*/
