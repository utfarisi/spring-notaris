package edu.ut.kelompokb.notaryapp.etc;

public enum InvoiceStatus {

    ISSUED("Diterbitkan"),
    PAID("Sudah Dibayar"),
    OVERDUE("Melewati Tempo"),
    CANCEL("Batal");

    private final String displayName;

    InvoiceStatus(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}
