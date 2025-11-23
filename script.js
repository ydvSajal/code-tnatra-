// Split Panel Resizer
const resizer = document.getElementById('resizer');
const leftPanel = document.querySelector('.left-panel');
const rightPanel = document.querySelector('.right-panel');
const mainContent = document.querySelector('.main-content');

let isResizing = false;

resizer.addEventListener('mousedown', (e) => {
    isResizing = true;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
});

document.addEventListener('mousemove', (e) => {
    if (!isResizing) return;

    const containerRect = mainContent.getBoundingClientRect();
    const newLeftWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;

    if (newLeftWidth > 20 && newLeftWidth < 80) {
        leftPanel.style.width = `${newLeftWidth}%`;
    }
});

document.addEventListener('mouseup', () => {
    if (isResizing) {
        isResizing = false;
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
    }
});

// Collapsible Sections
function toggleSection(button) {
    const content = button.nextElementSibling;
    button.classList.toggle('collapsed');
    content.classList.toggle('hidden');
}

// Code Editor Line Numbers
const codeInput = document.getElementById('codeInput');
const lineNumbers = document.getElementById('lineNumbers');

function updateLineNumbers() {
    const lines = codeInput.value.split('\n').length;
    const currentLines = lineNumbers.children.length;

    if (lines > currentLines) {
        for (let i = currentLines + 1; i <= lines; i++) {
            const lineDiv = document.createElement('div');
            lineDiv.textContent = i;
            lineNumbers.appendChild(lineDiv);
        }
    } else if (lines < currentLines) {
        while (lineNumbers.children.length > lines) {
            lineNumbers.removeChild(lineNumbers.lastChild);
        }
    }
}

codeInput.addEventListener('input', updateLineNumbers);
codeInput.addEventListener('scroll', () => {
    lineNumbers.style.transform = `translateY(-${codeInput.scrollTop}px)`;
});

// Sync scroll between line numbers and code input
codeInput.addEventListener('scroll', () => {
    lineNumbers.scrollTop = codeInput.scrollTop;
});

// Timer Countdown
function updateTimer() {
    const timerElement = document.querySelector('.timer-value');
    let timeString = timerElement.textContent;
    let [hours, minutes, seconds] = timeString.split(':').map(Number);

    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minutes--;
        if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
                hours = 0;
                minutes = 0;
                seconds = 0;
            }
        }
    }

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timerElement.textContent = formattedTime;
}

// Update timer every second
setInterval(updateTimer, 1000);



// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + S to save (prevent default)
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        console.log('Code saved');
    }

    // Ctrl/Cmd + Enter to submit
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        console.log('Code submitted');
    }
});

// Tab key support in textarea
codeInput.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        e.preventDefault();
        const start = codeInput.selectionStart;
        const end = codeInput.selectionEnd;
        const value = codeInput.value;

        codeInput.value = value.substring(0, start) + '    ' + value.substring(end);
        codeInput.selectionStart = codeInput.selectionEnd = start + 4;
    }
});

// Initialize
updateLineNumbers();

// 10 Hard C++ Coding Questions
const questions = [
    {
        id: 1,
        title: "Segment Tree - Range Sum Query with Updates",
        description: "Build a segment tree to efficiently handle range sum queries and point update operations on an array.",
        inputFormat: [
            "First line contains N (array size) and Q (number of queries)",
            "Second line contains N space-separated integers (array elements)",
            "Next Q lines contain either 'update index value' or 'query left right'"
        ],
        outputFormat: [
            "For each query operation, print the sum of elements in range [left, right]",
            "Updates don't produce output"
        ],
        testCase: {
            input: "5 4\n1 3 5 7 9\nquery 0 2\nupdate 1 6\nquery 0 2\nquery 2 4",
            output: "9\n12\n21"
        }
    },
    {
        id: 2,
        title: "Trie - Longest Common Prefix",
        description: "Implement a Trie (prefix tree) to find the longest common prefix among all words. Handle insertion and prefix search efficiently.",
        inputFormat: [
            "First line contains N (number of words)",
            "Next N lines contain words (lowercase letters only)"
        ],
        outputFormat: [
            "Print the longest common prefix of all words",
            "If no common prefix exists, print 'No common prefix'"
        ],
        testCase: {
            input: "3\nflower\nflow\nflight",
            output: "fl"
        }
    },
    {
        id: 3,
        title: "Suffix Array - Pattern Matching",
        description: "Build a suffix array and use it to find all occurrences of a pattern in a text string efficiently.",
        inputFormat: [
            "First line contains the text string",
            "Second line contains the pattern to search"
        ],
        outputFormat: [
            "Print all starting indices where pattern occurs (0-indexed, space-separated)",
            "If pattern not found, print -1"
        ],
        testCase: {
            input: "banana\nana",
            output: "1 3"
        }
    },
    {
        id: 4,
        title: "Red-Black Tree - Self-Balancing BST",
        description: "Implement a Red-Black Tree with insertion maintaining all RB properties: root is black, red nodes have black children, all paths have same black height.",
        inputFormat: [
            "First line contains N (number of insertions)",
            "Second line contains N space-separated integers to insert"
        ],
        outputFormat: [
            "Print inorder traversal with colors (B for black, R for red)",
            "Format: value(color) space-separated"
        ],
        testCase: {
            input: "5\n10 20 30 15 25",
            output: "10(B) 15(R) 20(B) 25(R) 30(B)"
        }
    },
    {
        id: 5,
        title: "Disjoint Set Union - Cycle Detection",
        description: "Implement Union-Find (Disjoint Set Union) with path compression and rank optimization to detect cycles in an undirected graph.",
        inputFormat: [
            "First line contains V (vertices) and E (edges)",
            "Next E lines contain two integers u and v representing edge u-v"
        ],
        outputFormat: [
            "Print 'Cycle detected' if graph contains cycle",
            "Otherwise print 'No cycle' and number of connected components"
        ],
        testCase: {
            input: "4 4\n0 1\n1 2\n2 3\n3 1",
            output: "Cycle detected"
        }
    },
    {
        id: 6,
        title: "Fenwick Tree - Range Update Point Query",
        description: "Implement a Binary Indexed Tree (Fenwick Tree) supporting range updates and point queries using difference array technique.",
        inputFormat: [
            "First line contains N (array size) and Q (queries)",
            "Next Q lines contain 'update L R val' or 'query index'"
        ],
        outputFormat: [
            "For each query, print the value at given index after all previous updates"
        ],
        testCase: {
            input: "5 4\nupdate 0 2 5\nquery 1\nupdate 1 3 3\nquery 2",
            output: "5\n8"
        }
    },
    {
        id: 7,
        title: "KD-Tree - Nearest Neighbor Search",
        description: "Build a 2D KD-Tree and implement efficient nearest neighbor search for a given query point.",
        inputFormat: [
            "First line contains N (number of points)",
            "Next N lines contain x and y coordinates",
            "Last line contains query point coordinates qx qy"
        ],
        outputFormat: [
            "Print coordinates of nearest point and its distance (2 decimal places)",
            "Format: x y distance"
        ],
        testCase: {
            input: "4\n2 3\n5 4\n9 6\n4 7\n5 5",
            output: "5 4 1.41"
        }
    },
    {
        id: 8,
        title: "Splay Tree - Self-Adjusting BST",
        description: "Implement a Splay Tree with search operation that splays accessed node to root. Maintain BST property while performing rotations.",
        inputFormat: [
            "First line contains N (number of operations)",
            "Next N lines contain 'insert x' or 'search x'"
        ],
        outputFormat: [
            "For each search, print preorder traversal after splaying",
            "Insert operations don't produce output"
        ],
        testCase: {
            input: "5\ninsert 10\ninsert 20\ninsert 5\nsearch 5\nsearch 20",
            output: "5 10 20\n20 5 10"
        }
    },
    {
        id: 9,
        title: "Persistent Segment Tree - Version Control",
        description: "Implement a persistent segment tree maintaining all previous versions. Support range queries on any historical version of the array.",
        inputFormat: [
            "First line contains N (array size) and Q (queries)",
            "Second line contains N integers (initial array)",
            "Next Q lines: 'update version index value' or 'query version left right'"
        ],
        outputFormat: [
            "For each query, print range sum for specified version",
            "Updates create new version (numbered sequentially from 0)"
        ],
        testCase: {
            input: "4 3\n1 2 3 4\nupdate 0 1 5\nquery 0 0 3\nquery 1 0 3",
            output: "10\n13"
        }
    },
    {
        id: 10,
        title: "Heavy-Light Decomposition - Path Queries",
        description: "Decompose a tree using Heavy-Light Decomposition to answer path queries efficiently using segment trees on chains.",
        inputFormat: [
            "First line contains N (nodes) and Q (queries)",
            "Next N-1 lines contain edges u v",
            "Next line contains N node values",
            "Next Q lines: 'query u v' for path sum from u to v"
        ],
        outputFormat: [
            "For each query, print sum of values on path between u and v"
        ],
        testCase: {
            input: "5 2\n0 1\n0 2\n1 3\n1 4\n1 2 3 4 5\nquery 3 4\nquery 2 4",
            output: "11\n10"
        }
    }
];

let currentQuestionIndex = 0;

// Load question
function loadQuestion(index) {
    const question = questions[index];
    currentQuestionIndex = index;
    
    document.getElementById('questionTitle').textContent = question.title;
    
    const questionContent = document.getElementById('questionContent');
    questionContent.innerHTML = `
        <p>${question.description}</p>
        
        <h3>Input Format:</h3>
        <ul>
            ${question.inputFormat.map(item => `<li>${item}</li>`).join('')}
        </ul>
        
        <h3>Output Format:</h3>
        <ul>
            ${question.outputFormat.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
    
    const testCaseContent = document.getElementById('testCaseContent');
    testCaseContent.innerHTML = `
        <div class="test-case">
            <h4>Test Case 1:</h4>
            <p><strong>Input:</strong></p>
            <pre class="output-box">${question.testCase.input}</pre>
            <p><strong>Expected Output:</strong></p>
            <pre class="result-box">${question.testCase.output}</pre>
        </div>
    `;
    
    // Update active question button
    document.querySelectorAll('.q-btn').forEach((btn, idx) => {
        btn.classList.remove('active');
        if (idx === index) {
            btn.classList.add('active');
        }
    });
}

// Sidebar functionality
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarClose = document.getElementById('sidebarClose');
const sidebarOverlay = document.getElementById('sidebarOverlay');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
});

sidebarClose.addEventListener('click', () => {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
});

sidebarOverlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
});

// Question navigation
document.querySelectorAll('.q-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        loadQuestion(index);
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    });
});

// Load first question
loadQuestion(0);

// Fullscreen functionality
const fullscreenBtn = document.getElementById('fullscreenBtn');

if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            // Enter fullscreen
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            // Exit fullscreen
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    });
}

// Update fullscreen button icon when fullscreen state changes
document.addEventListener('fullscreenchange', () => {
    const btn = document.getElementById('fullscreenBtn');
    if (btn) {
        if (document.fullscreenElement) {
            // In fullscreen - show exit icon
            btn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 4L8 8M16 4L12 8M16 16L12 12M4 16L8 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            `;
        } else {
            // Not in fullscreen - show enter icon
            btn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2" fill="none" />
                    <circle cx="10" cy="10" r="3" fill="currentColor" />
                </svg>
            `;
        }
    }
});

// Initialize
updateLineNumbers();

// Button click handlers
document.querySelector('.btn-finish').addEventListener('click', () => {
    if (confirm('Are you sure you want to finish the test?')) {
        console.log('Test finished');
    }
});

document.querySelector('.btn-clear').addEventListener('click', () => {
    if (confirm('Are you sure you want to clear your code?')) {
        codeInput.value = '';
        updateLineNumbers();
    }
});

document.querySelector('.btn-submit').addEventListener('click', () => {
    console.log('Code submitted for evaluation');
    alert('Code submitted successfully!');
});

// Add sample code for demonstration
codeInput.value = `// Write your code here

`;
updateLineNumbers();
