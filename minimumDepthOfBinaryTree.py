class Solution(object):
    def minDepth(self, root):
        if root==None:
            return 0
        leftDepth=self.minDepth(root.left)
        rightDepth=self.minDepth(root.right)
        if root.left==None and root.right==None:
            return 1
        if root.left == None:
            return rightDepth+1
        if root.right == None:
            return leftDepth+1
        return min(leftDepth,rightDepth)+1
        