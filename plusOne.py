class Solution(object):
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        number = ''
        for digit in digits:
            number += str(digit)
        number = int(number) + 1
        digits = [int(digit) for digit in str(number)]
        return digits

