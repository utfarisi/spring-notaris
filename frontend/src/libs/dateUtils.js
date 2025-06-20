export const formatDate = (dateStr) => {
    if (!dateStr) {
        return '-'; // Or any default value you prefer for null/empty dates
    }
    try {
        const date = new Date(dateStr);
        // Check if the date is valid before formatting
        if (isNaN(date.getTime())) {
            console.warn('Invalid date string provided to formatDate:', dateStr);
            return 'Tanggal tidak valid'; // Or throw an error
        }
        return date.toLocaleDateString('id-ID', {
            weekday: 'long', // Senin, Selasa, ...
            year: 'numeric',
            month: 'long',   // Januari, Februari, ...
            day: 'numeric',
        });
    } catch (error) {
        console.error('Error formatting date:', dateStr, error);
        return 'Format tanggal salah';
    }
};

// Anda bisa menambahkan helper tanggal lain di sini
export const formatTime = (dateStr) => {
    if (!dateStr) {
        return '-';
    }
    try {
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) {
            return 'Waktu tidak valid';
        }
        return date.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false // Use 24-hour format
        });
    } catch (error) {
        console.error('Error formatting time:', dateStr, error);
        return 'Format waktu salah';
    }
};