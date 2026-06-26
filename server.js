const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// ⚡ SOLVES CORS PROBLEM PERFECTLY FOR ANY FRONTEND Origin
app.use(cors({ origin: '*' }));

app.post('/api/route', (req, res) => {
    const { platform, command } = req.body;
    console.log(`Backend processing parameters: ${platform} -> ${command}`);

    let domain = platform.includes('.') ? platform : `${platform}.com`;
    
    // Formatting direct target with execution instruction in the hash array
    let completeTarget = `https://${domain}/#cygnus_exec=${encodeURIComponent(command)}`;

    res.json({
        success: true,
        message: "Payload compilation complete.",
        redirectUrl: completeTarget
    });
});

app.listen(PORT, () => console.log(`Secure core active on port ${PORT}`));
